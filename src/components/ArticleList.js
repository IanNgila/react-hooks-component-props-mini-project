import Article from "./Article"

function ArticleList(props) {
    const postsArray = props.posts.map(post => {
        return <Article 
            key={post.id}
            title={post.title}
            date={post.date}
            preview={post.preview}
            />
    })

    return (
        <main>
            {postsArray}
        </main>
    )
}

export default ArticleList;