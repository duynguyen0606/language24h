function randomData(data) {
    return data
        .sort(() => 0.5 - Math.random())
        .map((item) => {
            item.choices.sort(() => 0.5 - Math.random())
            return item
        })
}

export default randomData
