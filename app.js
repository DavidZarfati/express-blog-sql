
import express from "express"
import postRouter from "./routers/posts.js"
import notFound from "./middlewares/notFound.js"
import errorsHandler from "./middlewares/errorsHandler.js"

const app = express()
const port = 3000

app.use(express.static("public"))

app.use(express.json())



app.get("/", (req, resp) => {
    console.log("Rotta /");
    resp.send("test")
});

// Rotta di test per provare l'errorsHandler
app.get("/test-error", (req, res) => {
    throw new Error("Test errore");
});
app.use("/posts", postRouter)

app.use(errorsHandler)
app.use(notFound);

app.listen(port, () => {
    console.log("il server è in ascolto sulla porta " + port);
})
