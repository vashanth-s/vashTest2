from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar, Iterable, Mapping, Optional, Union

DESCRIPTOR: _descriptor.FileDescriptor

class Entities(_message.Message):
    __slots__ = ["entities"]
    ENTITIES_FIELD_NUMBER: ClassVar[int]
    entities: _containers.RepeatedCompositeFieldContainer[Entity]
    def __init__(self, entities: Optional[Iterable[Union[Entity, Mapping]]] = ...) -> None: ...

class Entity(_message.Message):
    __slots__ = ["entityId", "entityType", "id", "name"]
    ENTITYID_FIELD_NUMBER: ClassVar[int]
    ENTITYTYPE_FIELD_NUMBER: ClassVar[int]
    ID_FIELD_NUMBER: ClassVar[int]
    NAME_FIELD_NUMBER: ClassVar[int]
    entityId: str
    entityType: str
    id: int
    name: str
    def __init__(self, id: Optional[int] = ..., name: Optional[str] = ..., entityId: Optional[str] = ..., entityType: Optional[str] = ...) -> None: ...
