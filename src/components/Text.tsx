import React from 'react';

export interface TextProps {
  text: string;
}

const Text: React.FunctionComponent<TextProps> = ({ text }) => <>{text}</>;

export default Text;
