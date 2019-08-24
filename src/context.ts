import * as React from "react";

const CurrentAudioContext = React.createContext({})

export const CurrentAudioProvider = CurrentAudioContext.Provider
export const UserConsumer = CurrentAudioContext.Consumer
export default CurrentAudioContext