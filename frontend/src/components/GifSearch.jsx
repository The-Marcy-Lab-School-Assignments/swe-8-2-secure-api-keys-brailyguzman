function GifSearch() {
    return (
        <form>
            <label htmlFor="searchInput">Enter a Search Term </label>
            <input type="text" className="form-control" id="searchInput" />
            <button type="submit" className="btn btn-success">Search</button>
        </form>
    )
}

export default GifSearch