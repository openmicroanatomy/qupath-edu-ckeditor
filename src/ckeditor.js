import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { AutoLink } from '@ckeditor/ckeditor5-link';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { Bold } from '@ckeditor/ckeditor5-basic-styles';
import { CodeBlock } from '@ckeditor/ckeditor5-code-block';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { FontBackgroundColor } from '@ckeditor/ckeditor5-font';
import { FontColor } from '@ckeditor/ckeditor5-font';
import { FontFamily } from '@ckeditor/ckeditor5-font';
import { FontSize } from '@ckeditor/ckeditor5-font';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Highlight } from '@ckeditor/ckeditor5-highlight';
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line';
import { Image } from '@ckeditor/ckeditor5-image';
import { ImageCaption } from '@ckeditor/ckeditor5-image';
import { ImageResize } from '@ckeditor/ckeditor5-image';
import { ImageStyle } from '@ckeditor/ckeditor5-image';
import { ImageToolbar } from '@ckeditor/ckeditor5-image';
import { ImageUpload } from '@ckeditor/ckeditor5-image';
import { ImageInsert } from '@ckeditor/ckeditor5-image';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { IndentBlock } from '@ckeditor/ckeditor5-indent';
import { Italic } from '@ckeditor/ckeditor5-basic-styles';
import { Link } from '@ckeditor/ckeditor5-link';
import { LinkImage } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { ListProperties } from '@ckeditor/ckeditor5-list';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format';
import { SimpleUploadAdapter } from '@ckeditor/ckeditor5-upload';
import { SpecialCharacters } from '@ckeditor/ckeditor5-special-characters';
import { SpecialCharactersArrows } from '@ckeditor/ckeditor5-special-characters';
import { SpecialCharactersCurrency } from '@ckeditor/ckeditor5-special-characters';
import { SpecialCharactersEssentials } from '@ckeditor/ckeditor5-special-characters';
import { SpecialCharactersLatin } from '@ckeditor/ckeditor5-special-characters';
import { SpecialCharactersMathematical } from '@ckeditor/ckeditor5-special-characters';
import { SpecialCharactersText } from '@ckeditor/ckeditor5-special-characters';
import { Strikethrough } from '@ckeditor/ckeditor5-basic-styles';
import { Subscript } from '@ckeditor/ckeditor5-basic-styles';
import { Superscript } from '@ckeditor/ckeditor5-basic-styles';
import { Table } from '@ckeditor/ckeditor5-table';
import { TableCellProperties } from '@ckeditor/ckeditor5-table';
import { TableProperties } from '@ckeditor/ckeditor5-table';
import { TableToolbar } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { Title } from '@ckeditor/ckeditor5-heading';
import { Underline } from '@ckeditor/ckeditor5-basic-styles';

class Editor extends ClassicEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
    Alignment,
    Autoformat,
    AutoLink,
    BlockQuote,
    Bold,
    CodeBlock,
    Essentials,
    FontBackgroundColor,
    FontColor,
    FontFamily,
    FontSize,
    Heading,
    Highlight,
    HorizontalLine,
    Image,
    ImageCaption,
    ImageResize,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    ImageInsert,
    Indent,
    IndentBlock,
    Italic,
    Link,
    LinkImage,
    List,
    ListProperties,
    MediaEmbed,
    Paragraph,
    PasteFromOffice,
    RemoveFormat,
    SimpleUploadAdapter,
    SpecialCharacters,
    SpecialCharactersArrows,
    SpecialCharactersCurrency,
    SpecialCharactersEssentials,
    SpecialCharactersLatin,
    SpecialCharactersMathematical,
    SpecialCharactersText,
    Strikethrough,
    Subscript,
    Superscript,
    Table,
    TableCellProperties,
    TableProperties,
    TableToolbar,
    TextTransformation,
    Title,
    Underline
];

export default Editor;