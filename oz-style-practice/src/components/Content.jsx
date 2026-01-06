

import styled from "styled-components";


const ContentContainer = styled.div`

display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;

`;

const Image = styled.img`

 width: 300px;
  border-radius: 10px;
  margin-bottom: 3px;
  min-height: 225px;

`;

const Spans = styled.span`
font-size: 12px;
  font-weight: 400;
  color: #d7fa00;
  border: 1px solid #d7fa00;
  padding: 4px 5px;
  border-radius: 3px;
`;

const Didi = styled.div`
   font-size: 18px;
  font-weight: 600;
`;
const PPP = styled.p`

  font-size: 12px;
  font-weight: 400;
  color: rgb(160, 160, 160);
`;

export default function Content({ content }) {
  return (
    <section className="flex flex-wrap gap-5 p-5">
    <ContentContainer className="flex flex-col items-start gap-1">
      <Image src={content.img} alt={content.title} className="w-[300px] rounded-[10px] mb-[3px]" />
      <Spans className="text-[12px] text-[#d7fa00] border border-[#d7fa00] px-[5px] py-[4px] rounded-[3px]">모집중</Spans>
      <div className="text-[18px] font-semibold">{content.title}</div>
      <PPP className="text-[12px] text-gray-400">{content.subtitle}</PPP>
    </ContentContainer>
    </section>
  );
}
