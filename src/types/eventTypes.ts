import { KeyboardEvent, MouseEvent, ChangeEvent, SyntheticEvent } from 'react'

type MuiKeyBoardEvent = KeyboardEvent<HTMLInputElement>
type MuiOnClickEvent = MouseEvent<HTMLInputElement>
type MuiOnChangeEvent = ChangeEvent<HTMLInputElement>
type MuiAutoCompleteOnChangeEvent = SyntheticEvent<Element, Event>

export type {
  MuiKeyBoardEvent,
  MuiOnChangeEvent,
  MuiOnClickEvent,
  MuiAutoCompleteOnChangeEvent,
}
