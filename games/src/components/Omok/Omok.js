import React from 'react'

function Omok() {

    const [state, setstate] = useState([])

    useEffect(() => {
        let arr = []
        for(let i=0;i<15;i++){
            let row = []
            for(let j=0;j<15;j++){
                row.push(null)
            }
        }

    }, [])


    return (
        <div className="game">
            <div className="board">
                게임판 15x15
            </div>
        </div>
    )
}

export default Omok
