import './escopo.css'

function CorNova() {
    const label = "Clique aqui para mudar a cor";

    function mudarCor() {
        const cores = ["Gray", "Green", "Red", "Blue", "Black", "White", "#242424"];
        const randomColor = cores[Math.floor(Math.random() * cores.length)];
        document.body.style.backgroundColor = randomColor;
    }

    return (
        <>
            <div>
                <button onClick={mudarCor}>{label}</button>
            </div>
            <p className='test'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quod sapiente natus, 
                libero fuga facilis dolore quas similique dolorum qui nostrum temporibus explicabo 
                laboriosam alias a aspernatur inventore facere consequuntur.
            </p>
        </>
    );
}
export default CorNova;
