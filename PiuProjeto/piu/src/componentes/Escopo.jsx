

function Escopo() {
    const label = "Clique Aqui"

    function handleClick(){
        return(
            alert('Alerta')
        )
    }
    return (
        <>
        <div>
            <h2>Teste de componentes</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores eum repudiandae, sint necessitatibus accusamus rem quis? Nulla recusandae in unde, mollitia, exercitationem vero sunt quia libero ad minima repudiandae itaque.</p>
        </div>
        <div>
            <button onClick={handleClick}>{label}</button>
        </div>
        </>
    )
}

export default Escopo