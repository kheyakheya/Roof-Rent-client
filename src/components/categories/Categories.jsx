import Container from "../shared/Container";
import CategoryBox from "./CategoryBox";
import { categories } from "./categoriesData";
const Categories = () => {
    return (
        <div>
           <Container>
            <div className="pt-4 flex justify-between items-center over-flow-x-auto">
                {categories.map(item=><CategoryBox key={item.label} label={item.label}></CategoryBox>)}
            </div>
           </Container>
        </div>
    );
};

export default Categories;