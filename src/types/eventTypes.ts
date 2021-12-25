import { KeyboardEvent, MouseEvent, ChangeEvent } from 'react'

type MuiKeyBoardEvent = KeyboardEvent<HTMLInputElement>
type MuiOnClickEvent = MouseEvent<HTMLInputElement>
type MuiOnChangeEvent = ChangeEvent<HTMLInputElement>

export type { MuiKeyBoardEvent, MuiOnChangeEvent, MuiOnClickEvent }
