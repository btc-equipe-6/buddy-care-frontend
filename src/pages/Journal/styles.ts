import styled from "styled-components";

export const JournalMain = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
`;

export const JournalSection = styled.section`
  margin-bottom: 40px;
`;

export const TextJournal = styled.h2`
  color: #1f3a93;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

export const TabContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const TabButton = styled.button`
  background-color: #fff;
  border: 2px solid #1f3a93;
  border-radius: 5px;
  color: #1f3a93;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
  padding: 10px 20px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #1f3a93;
    color: #fff;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const DiaryMain = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
`;

export const DiaryForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const DiaryTextarea = styled.textarea`
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const DiaryButton = styled.button`
  background-color: #1f3a93;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #1f3a93;
  }
`;

export const DiaryEntry = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 20px;
`;

export const DiaryEntryDate = styled.span`
  color: #999;
  font-size: 14px;
  margin-right: 10px;
`;

export const DiaryEntryText = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin: 10px 0;
`;
export const JournalSectionHistory = styled(JournalSection)`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      margin-bottom: 20px;
      border-left: 5px solid #1f3a93;
      padding-left: 15px;

      span {
        display: block;
        font-size: 12px;
        color: #707070;
        margin-bottom: 5px;
      }

      p {
        font-size: 16px;
        line-height: 1.5;
        margin-bottom: 0;
      }
    }
  }
`;


