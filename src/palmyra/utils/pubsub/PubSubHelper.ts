import { topic, TopicListener } from "@palmyralabs/ts-utils";
import { Dispatch, SetStateAction, useEffect, useState } from "react";


function setKeyValue<T>(key: string, value: T) {
    topic.publish('_keyValue-' + key, value);
}

function useKeyValue<T>(key: string, defaultValue: T): [T, Dispatch<SetStateAction<T>>] {
    const [value, setValue] = useState<T>(defaultValue);

    const l: TopicListener<T> = (_topic: string, data: T) => {
        setValue(data);
    }

    useEffect(() => {
        var handle = topic.subscribe('_keyValue-' + key, l)
        return () => { topic.unsubscribe(handle) }
    }, [])

    return [value, setValue]
}

function execute<T>(func: string, props: T) {
    topic.publish('_execute-' + func, props);
}

type Func<T> = (d: T) => void

function useExecute<T>(key: string, func: Func<T>): Func<T> {
    const f = func;

    const l: TopicListener<T> = (_topic: string, data: T) => {
        f(data);
    }

    const execute: Func<T> = (data: T) => {
        f(data);
    }

    useEffect(() => {
        var handle = topic.subscribe('_execute-' + key, l)
        return () => { topic.unsubscribe(handle) }
    }, [])

    return execute;
}



export { useKeyValue, setKeyValue, execute, useExecute };