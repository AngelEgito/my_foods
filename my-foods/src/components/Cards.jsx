import Card from "./Card";

function Cards() {
    return (
        <>
            <Card
                title="Acarajé"
                description="Literalmente uma 'comida dos Deuses!' "
                imgPath="https://blog.123milhas.com/wp-content/uploads/2022/08/sao-paulo-sp-onde-comer-um-bom-acaraje-na-terra-da-garoa-mao-acaraje-conexao123.png"
            />

            <Card
                title="Strogonoff de Frango"
                description="Amooooooo!"
                imgPath="https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/Strogonoff-frango.jpg"
            />

            <Card
                title="Salpicão"
                description="Uma perfeição em forma de alimento"
                imgPath="http://www.hojetemfrango.com.br/wp-content/uploads/2018/10/salpicao-de-frango-defumado.jpg"
            />
        </>
    );
}
export default Cards;