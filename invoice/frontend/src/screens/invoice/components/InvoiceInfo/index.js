// eslint-disable-next-line
import styled from "styled-components/macro";
import { THEME_MODE, useTheme } from "context/theme.context";
import PropTypes from "prop-types";
import * as React from "react";
import { colors } from "styles/colors";
import {
  Wrapper,
  InfoItem,
  InfoItemName,
  InfoItemValue,
  InvoiceId,
  ClientName,
} from "./styles";

function InvoiceInfo({ senderAddress, clientAddress, ...invoice }) {
  const [theme] = useTheme();
  const color = theme === THEME_MODE.light ? colors.p12 : colors.p10;
  return (
    <Wrapper
      css={`
        color: ${color};
      `}
    >
      <InfoItem className="invoice-id">
        <InfoItem>
          <InvoiceId># {invoice.id}</InvoiceId>
          <small>{invoice.description}</small>
        </InfoItem>
        <InfoItem>
          {Object.keys(senderAddress).map((key) => (
            <small key={key}>{senderAddress[key]}</small>
          ))}
        </InfoItem>
      </InfoItem>
      <InfoItem>
        <InfoItem className="invoice-date">
          <InfoItemName>Invoice Date</InfoItemName>
          <InfoItemValue>{invoice.createdAt}</InfoItemValue>
        </InfoItem>
        <InfoItem className="invoice-date">
          <InfoItemName>Payment Due</InfoItemName>
          <InfoItemValue>{invoice.paymentDue}</InfoItemValue>
        </InfoItem>
      </InfoItem>
      <InfoItem>
        <InfoItemName>Bill To</InfoItemName>
        <ClientName>{invoice.clientName}</ClientName>
        {Object.keys(senderAddress).map((key) => (
          <small key={key}>{senderAddress[key]}</small>
        ))}
      </InfoItem>
      <InfoItem className="client-email">
        <InfoItemName>Send to</InfoItemName>
        <InfoItemValue>{invoice.clientEmail}</InfoItemValue>
      </InfoItem>
    </Wrapper>
  );
}

InvoiceInfo.propTypes = {
  id: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  paymentDue: PropTypes.string.isRequired,
  clientName: PropTypes.string.isRequired,
  clientEmail: PropTypes.string.isRequired,
  clientAddress: PropTypes.object.isRequired,
  senderAddress: PropTypes.object.isRequired,
};

export default InvoiceInfo;
