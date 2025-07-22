import os

from fastapi import FastAPI, HTTPException, Request
from fastapi.staticfiles import StaticFiles
from fastapi.responses import ORJSONResponse, FileResponse

PORT = 8000

app = FastAPI(default_response_class=ORJSONResponse)

# pdfは静的ファイルとして
app.mount("/books", StaticFiles(directory="books", html=True), name="static")
app.mount("/styles", StaticFiles(directory="styles"), name="styles")
app.mount("/scripts", StaticFiles(directory="scripts"), name="scripts")
@app.get("/")
async def index():
    return FileResponse("index.html")

# 本の一覧
@app.get("/list-books")
async def booksList():
    books_dir = "./books"
    if not os.path.exists(books_dir):
        raise HTTPException(404, "Books directory not found")
    files = [f for f in os.listdir(books_dir) if f.endswith(".pdf")]
    books = []
    for file in files:
    return files


@app.get("/pdfjs/{path:path}")
async def pdfjs(request: Request, path: str):
    
    path = path.replace("../", "")
    if path.endswith(".mjs"):
        contentType = "application/javascript"
        print("a")
    else:
        contentType = None
    return FileResponse(f"pdfjs/{path}", media_type=contentType)

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=PORT)


