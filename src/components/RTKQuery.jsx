import { useState } from "react"
import { useGetPostQuery, useGetPostsQuery } from "../api/api"

export const RTKQuery = () => {

    const [id, setId] = useState(1)

    const { data: posts = [], isLoading: postsLoading } = useGetPostsQuery()
    const { data: post = [], isLoading: postLoading } = useGetPostQuery(id)

    const postPrev = () => id > 1 && setId(id - 1)
    const postNext = () => setId(id + 1)

    return (
        <Container>
            {/* Posts */ }
            <Loading loading={ postsLoading } />
            <Posts posts={ posts } />

            {/* Post */ }
            <Loading loading={ postLoading } />
            <Post
                post={ post }
                prev={ postPrev }
                next={ postNext }
            />
        </Container>
    )
}



export const Container = ({ children }) => {
    const css = 'container bg-success-subtle px-4 pt-1 pb-3 mb-4 rounded shadow'
    return (<div className={ css }>{ children }</div>)
}


export const Loading = ({ loading }) => loading
    ? <div className="text-bg-warning rounded py-1 my-4 shadow">Cargando...</div>
    : <div className="text-bg-success rounded py-1 my-4 shadow">Cargado</div>



export const Posts = ({ posts }) => {

    const css = 'bg-white rounded shadow'
    const style = { height: '50vh', overflow: 'overlay' }

    return (
        <div className={ css } style={ style }>
            { posts.map(({ id, title }) =>
                <div key={ id }>
                    <strong>{ id }:</strong>
                    { title }
                </div>)
            }
        </div>
    )
}


export const Post = ({ post, prev, next }) => {

    const css = 'btn btn-secondary border-3 border-top-0 border-end-0 border-start-0 border-dark shadow'

    return (
        <div className="bg-light rounded shadow p-3">
            <div>
                <strong>{ post.id }</strong>
                { post.title }
            </div>

            <div className="d-flex gap-2 mt-3 justify-content-center">
                <button
                    className={ css }
                    onClick={ prev }>
                    Anterior
                </button>
                <button
                    className={ css }
                    onClick={ next }>
                    Siguiente
                </button>
            </div>

        </div>
    )
}