
import React from 'react';
import {IconButton} from "./IconButton";
import { ArrowLongRightIcon } from "react-native-heroicons/solid";

const BUTTON_SIZE = 48; // Define BUTTON_SIZE
const MARGIN_RIGHT = 10; // Define MARGIN_RIGHT

const NextButton = ({ nextComponent, ...rest }) => (
  <IconButton
    size={BUTTON_SIZE}
    style={{ marginRight: MARGIN_RIGHT }}
  >
    {nextComponent ?? <ArrowLongRightIcon size={24} color='#ffffff' style={{...rest}}/>}
  </IconButton>
);

export default NextButton;
