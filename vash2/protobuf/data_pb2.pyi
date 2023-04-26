from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Entity(_message.Message):
    __slots__ = ["name", "entityId", "entityType", "id"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    ENTITYID_FIELD_NUMBER: _ClassVar[int]
    ENTITYTYPE_FIELD_NUMBER: _ClassVar[int]
    ID_FIELD_NUMBER: _ClassVar[int]
    name: str
    entityId: str
    entityType: str
    id: int
    def __init__(self, name: _Optional[str] = ..., entityId: _Optional[str] = ..., entityType: _Optional[str] = ..., id: _Optional[int] = ...) -> None: ...

class Entities(_message.Message):
    __slots__ = ["entities"]
    ENTITIES_FIELD_NUMBER: _ClassVar[int]
    entities: _containers.RepeatedCompositeFieldContainer[Entity]
    def __init__(self, entities: _Optional[_Iterable[_Union[Entity, _Mapping]]] = ...) -> None: ...
