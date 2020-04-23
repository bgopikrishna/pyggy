async function createItem(Model, data) {
    let created = new Model(data);

    created = await created.save();

    return created;
}

module.exports = createItem;
