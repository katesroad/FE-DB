import { LinkCard } from "components/lib";
import styled from "styled-components";
import { IconArrawRight, IconEmpty } from "components/Icon";
import * as mediaQueries from "styles/media-queries";

/*---------------------Invoice Item related style-------------------- */

export const InvoiceWrap = styled(LinkCard)`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
`;
export const InvoiceAmount = styled.strong`
  font-size: 16px;
`;

export const Column = styled.div`
  position: "relative";
  display: flex;
  flex-direction: column;
  ${mediaQueries.medium} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 44%;
    margin-right: 24px;
  }
`;

export const ClientName = styled.span`
  margin-bottom: 18px;
  text-align: right;
  font-size: 14px;
  line-height: 20px;
  ${mediaQueries.medium} {
    margin-bottom: 0;
  }
`;

export const InvoiceId = styled.span`
  margin-bottom: 18px;
  font-size: 14px;
  ${mediaQueries.medium} {
    margin-bottom: 0;
  }
`;

export const DueDate = styled.span`
  font-size: 14px;
  line-height: 20px;
  ${mediaQueries.medium} {
    margin-bottom: 0;
  }
`;

export const InvoiceTotal = styled.h3`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.8px;
`;

export const ArrowButton = styled(IconArrawRight)`
  align-self: flex-end;
  display: none;
  padding: 16px 0;
  border-radius: 0;
  background-color: transparent;
  ${mediaQueries.medium} {
    display: flex;
  }
`;

/*-----------------------No Invoice------------------*/

export const NoInvoice = styled.div`
  padding: 10vh 0;
  text-align: center;
`;

export const Title = styled.h3`
  margin-bottom: 10px;
  font-size: 20px;
  line-height: 22px;
  letter-spacing: -0.6px;
  ${mediaQueries.medium} {
    font-size: 26px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 1.5;
`;

export const EmptyImage = styled(IconEmpty)`
  display: inline-block;
  width: 46%;
  min-width: 194px;
  margin-bottom: 40px;
`;
