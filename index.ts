import {pipe} from '@effect-ts/core/Function';
import * as O from '@effect-ts/core/Option';

pipe(
    undefined,
    O.fromNullable,
    O.isNone,
    O.if(() => O.none, () => O.some('test')),
    O.toUndefined,
);

