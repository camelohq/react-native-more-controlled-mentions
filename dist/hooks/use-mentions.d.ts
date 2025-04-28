import { UseMentionsConfig } from '../types';
import React from 'react';
import { NativeSyntheticEvent, Text, TextInputSelectionChangeEventData } from 'react-native';
/**
 * Hook that stores mention context.
 *
 * @param value
 * @param onChange
 * @param triggersConfig
 * @param patterns
 */
declare const useMentions: <TriggerName extends string>({ value, onChange, triggersConfig, patternsConfig, onSelectionChange, }: UseMentionsConfig<TriggerName>) => {
    triggers: import("../types/types").Triggers<TriggerName>;
    textInputProps: {
        onChangeText: (text: string) => void;
        onSelectionChange: (event: NativeSyntheticEvent<TextInputSelectionChangeEventData>) => void;
        children: React.CElement<import("react-native").TextProps, Text>;
    };
    mentionState: import("../types/types").MentionState;
};
export { useMentions };
