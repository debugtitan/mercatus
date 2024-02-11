
import React from 'react';
import {IconButton} from "./IconButton";
import { ArrowLongLeftIcon } from "react-native-heroicons/solid";

const BUTTON_SIZE = 48; // Define BUTTON_SIZE
const MARGIN_RIGHT = 10; // Define MARGIN_RIGHT

const BackButton = ({ nextComponent, ...rest }) => (
  <IconButton
    size={BUTTON_SIZE}
    style={{ marginRight: MARGIN_RIGHT }}
  >
    {nextComponent ?? <ArrowLongLeftIcon size={24} color='#ffffff' style={{...rest}}/>}
  </IconButton>
);

export default BackButton;
