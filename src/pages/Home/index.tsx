import { BottomBox, ChartBox, ChartBoxTwo, Container, Content, TopBox } from "./styles";

const Home = () => {
    return ( 
        <Container>
            <Content>
                <TopBox>
                    <ChartBox/>
                    <ChartBox/>
                    <ChartBox/>
                </TopBox>
                <BottomBox>
                    <ChartBoxTwo/>
                    <ChartBoxTwo/>
                </BottomBox>
            </Content>  
        </Container>
     );
}
 
export default Home;