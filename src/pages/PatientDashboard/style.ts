import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  background-color: #71c2bb;
  color: white;
  border-radius: 10%;
  cursor: pointer;
`;

const Content = styled.div`
  width: 90%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`;

const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 40px;
  background-color: #71c2bb;
`;

const ChartBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  background-color: #71c2bb;
`;

const ContentText = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
  color: #4c4c4c;
`;

const BottomBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 40px;
`;

const ChartBoxTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;
`;

const TabContainer = styled.div`
  margin-top: 40px;
  width: 100%;
`;

export { Container, Content, TopBox, ChartBox, ContentText, BottomBox, ChartBoxTwo, TabContainer };
