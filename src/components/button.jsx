import styled, { css } from "styled-components";

export const Button = styled.button`

margin:15px;
padding: .5rem .8rem;
border:1px solid ${({ theme }) => theme.primary};
border-radius:20px;
outline:none;
font-weight:bold;
background-color:${({ theme }) => theme.primary};
color:${({ theme }) => theme.secondary};
${({ disabled }) => disabled && 'background-color:transparent;'}

`