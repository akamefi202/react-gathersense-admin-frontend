import { Popper } from '@material-ui/core';
import styled from "styled-components";

const styledPopper = styled(Popper)`&&{
  
    z-index: 1;
    &[x-placement*="bottom"] .arrow{
  
      width: 0; 
      height: 0; 
      border-left: 1em solid transparent;
      border-right: 1em solid transparent;
      border-bottom: 1em solid #fff;
      margin-top: -0.9em;
      
      &:before {
        border-width: '0 1em 1em 1em';
        border-color: 'transparent transparent white transparent';
      }
    }
  
    &[x-placement*="top"] .arrow{
  
      bottom: 0;
      width: 0; 
      height: 0; 
      border-left: 1em solid transparent;
      border-right: 1em solid transparent;
      border-top: 1em solid #fff;
      margin-bottom: -0.9em;
  
      &:before {
        border-width: 1em 1em 0 1em;
        border-color: white transparent transparent transparent;
      }
    }
  
    &[x-placement*="right"] .arrow{
  
      left: 0;
      width: 0; 
      height: 0; 
      border-top: 1em solid transparent;
      border-bottom: 1em solid transparent;
      border-right: 1em solid #fff;
      margin-left: -0.9em;
  
      &:before {
        border-width: 1em 1em 1em 0;
        border-color: transparent white transparent transparent;
      }
    }
  
    &[x-placement*="left"] .arrow{
      
      right: 0;
      width: 0; 
      height: 0; 
      border-top: 1em solid transparent;
      border-bottom: 1em solid transparent;
      border-left: 1em solid #fff;
      margin-right: -0.9em;
  
      &:before {
        border-width: 1em 0 1em 1em;
        border-color: transparent transparent transparent white;
      }
    }
  
    .arrow {
      position: absolute;
      font-size: 7px;
      width: 3em;
      height: 3em;
  
      &:before {
        content: '""',
        margin: auto;
        display: block;
        width: 0;
        height: 0;
        border-style: solid;
      }
    }
  
    .popper-content-3dot {
        justify-content: center;
        align-items: center;
        background-color: rgba(250, 250, 250, 0.8);
        color: red;
        height: 60px;
        width: 120px;
        padding: 5px;
        box-shadow: 0px 3px 6px rgba(1, 0, 0, 0.2);
        border-radius: 4px;
    }

    .popper-content-color {
        justify-content: center;
        align-items: center;
        background-color:  #fff;
        color: red;
        height: 100px;
        width: 180px;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        padding: 12px;
        z-index: inherit;
    }
    .popper-content-dot {
      align-items: center;
      background-color:  #fff;
      color: red;
      height: 100px;
      width: 120px;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      padding: 12px;
      z-index: inherit;
  }
  
}`;

export default styledPopper;
