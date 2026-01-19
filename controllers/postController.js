import { posts } from "../data.js"
import connection from "../database/db.js";

function index(req, res) {
    let filteredPosts = posts;
    const tag = req.query.tag;
    if (tag) {
        filteredPosts = posts.filter(post => Array.isArray(post.tags) && post.tags.includes(tag));
    }
    const risposta = {
        count: filteredPosts.length,
        results: filteredPosts
    };
    res.json(risposta);
}
function show(req, res) {

    const id = parseInt(req.params.id);
    if (isNaN(id) || id < 0) {
        return res.status(404).json({
            errore: "IdNonValido",
            numero_errore: 404,
            descrizione: "L'id fornito non è valido."
        });
    }
    const resp = posts.find(game => game.id === id);
    if (!resp) {
        return res.status(404).json({
            errore: "PostNonTrovato",
            numero_errore: 404,
            descrizione: "Nessun post trovato con l'id fornito."
        });
    }
    res.json(resp);
}


function store(req, res) {
    console.log("Dati ricevuti in store:", req.body);
    const { title, content, path, tags } = req.body;
    // Controllo che ci siano i vari campi(altrimenti do errore)
    if (!title || !content || !path || !Array.isArray(tags)) {
        return res.status(400).json({ error: "Dati mancanti o non validi" });
    }

    let maxId = 0;
    for (const post of posts) {
        if (post.id > maxId) maxId = post.id;
    }
    const newId = maxId + 1;
    const newPost = { title, content, path, tags, id: newId };
    posts.push(newPost);
    res.status(201).json(newPost);
}

function update(req, res) {
    console.log("Dati ricevuti in update:", req.body);
    const id = parseInt(req.params.id);
    if (isNaN(id) || id < 0) {
        return res.status(404).json({
            errore: "IdNonValido",
            numero_errore: 404,
            descrizione: "L'id fornito non è valido."
        });
    }
    const post = posts.find(post => post.id === id);
    if (!post) {
        return res.status(404).json({
            errore: "PostNonTrovato",
            numero_errore: 404,
            descrizione: "Nessun post trovato con l'id fornito."
        });
    }

    const { title, content, path, tags } = req.body;
    if (!title || !content || !path || !Array.isArray(tags)) {
        return res.status(400).json({ error: "Dati mancanti o non validi" });
    }

    post.title = title;
    post.content = content;
    post.path = path;
    post.tags = tags;
    res.json(post);
}


function modify(req, res) {
    const id = req.params.id;
    res.send("aggiorna parzialmente post n." + id);
}

function destroy(req, res) {
    const id = parseInt(req.params.id);
    if (isNaN(id) || id < 0) {
        return res.status(404).json({
            errore: "IdNonValido",
            numero_errore: 404,
            descrizione: "L'id fornito non è valido."
        });
    }
    const post = posts.find(post => post.id === id);
    if (!post) {
        return res.status(404).json({
            errore: "PostNonTrovato",
            numero_errore: 404,
            descrizione: "Nessun post trovato con l'id fornito."
        });
    }
    res.send("cancella post n." + id);
}

export { index, show, store, update, modify, destroy };