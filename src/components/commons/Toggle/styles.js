import styled from "styled-components";

export const ToggleWrapper = styled.label`
        display: flex;
        align-items: center;
        .ToggleWrapper_label{
            &:not(:last-child){
                margin-right: 8px;
            }
        }
        .ToggleGroup{
             position: relative;
             display: inline-block;
             &:not(.image){
                 width: 36px;
                 height: 14px;
             }
             &.image{
                display: inline-flex;
                img{
                    width: 30px;
                    filter: opacity(0.4);
                    transition: transform 0.4s;
                    transform: scale(0.9);
                    cursor: pointer;
                }
                input:checked + img{
                    filter: opacity(1);
                    transform: scale(1);
                    transition: transform 0.4s;
                }
             }
             input { 
              opacity: 0;
              width: 0;
              height: 0;
              margin-left: 0;
            }
            
            .slider {
              position: absolute;
              cursor: pointer;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-color: #ccc;
              -webkit-transition: .4s;
              transition: .4s;
            }
            
            .slider:before {
              position: absolute;
              content: "";
              height: 22px;
              width: 22px;
              left: 0px;
              bottom: -3px;
              background-color: gray;
              transition: .4s;
              transition-timing-function: cubic-bezier(1, -0.01, 0.36, 1.01);
            }
            
            input:checked + .slider:before {
              transform: translateX(15px);
              background-color: #ff0100;
            }
            
            /* Rounded sliders */
            .slider.round {
              border-radius: 34px;
            }
            
            .slider.round:before {
              border-radius: 50%;
            }
         }
`;