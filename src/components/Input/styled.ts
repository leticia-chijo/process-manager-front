import styled from "styled-components"
import { colors } from "../../constants/colors"

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`

export const StyledInput = styled.input<{ $hasError?: boolean }>`
  width: 100%;
  padding: 10px 12px;
  font-size: 16px;
  font-family: Calibri, sans-serif;
  border: 1px solid ${({ $hasError }) => ($hasError ? colors.inputError : colors.neutral)};
  border-radius: 4px;
  outline: none;
  margin-bottom: ${({ $hasError }) => ($hasError ? 0 : 14)}px;
  &:focus {
    border-color: ${colors.inputFocus};
    border-width: 2px;
    padding: 9px 11px;
  }
`

export const ErrorText = styled.p`
  font-size: 12px;
  font-weight: 600;
  padding-top: 2px;
  color: ${colors.inputError};
`

export const LabelText = styled.p<{ $hasError?: boolean }>`
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 4px;
  color: ${({ $hasError }) => ($hasError ? colors.inputError : colors.primaryText)};
`

export const ClearButton = styled.button`
  position: absolute;
  right: -16px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #999;
  &:hover {
    color: #555;
  }
`
