import React, { ReactElement, Ref } from 'react';
import { TextInput } from 'react-native';
import { MentionInputProps } from './props';
declare const MentionInput: <TriggerName extends string>(p: Omit<import("react-native").TextInputProps, "onChange"> & import("../../types/types").UseMentionsConfig<TriggerName> & {
    onTriggersChange?: ((triggers: import("../../types/types").Triggers<TriggerName>) => void) | undefined;
} & {
    ref?: React.Ref<TextInput> | undefined;
}) => ReactElement | null;
export { MentionInput };
