const Feed = ({title, link , date}) => {
    let formatted = {day: "numeric" , month: "long" , year:"numeric"}

    let articleDate = new Date(date).toLocaleDateString("en-GB", formatted)

    return(
        <>
            <div className="news">
                <h4>{title}</h4>
                <p>{articleDate}</p>
            </div>
        </>
    )
}

export default Feed