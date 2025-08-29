import { Bagde } from "../../../components/Badge";
import { Card, CardDecription, CardImage, CardTitle } from "../../../components/card/Card";

interface FoodCardProps {
    src?: string;
    alt?: string;
    title: string;
    category: string;
    description: string;
}

export const FoodCard: React.FC<FoodCardProps> = ({ src, alt = '', title, category, description }) => {
    const imageSrc = src || "/foto.jpg";

    return (
        <Card>
            <CardImage src={ imageSrc } alt={ alt } />
            <CardTitle>
                <div className='flex justify-between items-center'>
                <h2>{ title }</h2>
                <Bagde size='small'>{ category }</Bagde>
                </div>
            </CardTitle>
            <CardDecription>{ description }</CardDecription>
        </Card>
    );
}