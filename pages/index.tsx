import {Btn, Htag, P, Rating, Tag} from "../components";
import {useState} from "react";
import {withLayout} from "../layout/Layout";
import {GetStaticProps} from "next";
import axios from "axios";
import {MenuItem} from "../interfaces/menu.interface";


function Home({menu}: HomeProps): JSX.Element {

    const [rating, setRating] = useState<number>(4);
    return (
        <>
            <Htag tag='h1'>текст</Htag>
            <Btn appearance='primary' className='asd'>primary</Btn>
            <Btn appearance='ghost'>ghost</Btn>
            <Btn appearance='ghost' arrow='right'>ghost</Btn>
            <Btn appearance='primary' arrow='right'>ghost</Btn>
            <P size='s'>sadasd</P>
            <P size='m'>sadasd</P>
            <P size='l'>sadasd</P>

            <Tag color='ghost'>ghost</Tag>
            <Tag color='red' href='#'>red</Tag>
            <Tag color='gray' size='s'>gray</Tag>
            <Tag color='green' size='m'>green</Tag>
            <Tag color='primary'>primary</Tag>
            <br/>
            <Rating rating={rating} isEditable={true} setRating={setRating}/>


        </>
    );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async  () => {
    const firstCategory = 0;

    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });

    return  {
        props: {
            menu,
            firstCategory
        }
    };
};

interface HomeProps extends Record<string, unknown>{
    menu: MenuItem[];
    firstCategory: number;
}
