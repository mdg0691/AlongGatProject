const Feed = ({title, link , date}) => {
    let formatted = {day: "numeric" , month: "long" , year:"numeric"}

    let articleDate = new Date(date).toLocaleDateString("en-GB", formatted)

    return(
        <>
            <div className="news">
                <h6>{title}</h6>
                <h7>{articleDate}</h7>
            </div>
        </>
    )
}

export default Feed