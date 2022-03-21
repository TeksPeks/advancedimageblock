import { __ } from '@wordpress/i18n'
import { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck, RichText } from '@wordpress/block-editor'
import { Panel, PanelBody, Button, ColorPicker } from '@wordpress/components'

import './editor.scss'

const ALLOWED_MEDIA_TYPES = [ 'image' ]
const textLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

export default function Edit({ attributes, setAttributes }) {
	const { imageId, imageURL, text, textLevel, textColor } = attributes

	const onUpdateImage = ( image ) => {
		setAttributes( {
			imageId: image.id,
			imageURL: image.url
		} )
	}

	const onChangeText = ( newText ) => {
		setAttributes( {
			text: newText
		} )
	}

	const onChangeTextLevel = ( newLevel ) => {
		setAttributes( {
			textLevel: newLevel
		} )
	}

	const onChangeTextColor = ( newColor ) => {
		setAttributes( {
			textColor: newColor
		} )
	}

	const style = {
		color: textColor
	}

	return (
		<div { ...useBlockProps() }>
			{ imageURL ? (
				<>
					<img src={imageURL} />
				</>
			) : (
				<>
				<MediaUploadCheck>
					<MediaUpload
						onSelect={ onUpdateImage }
						allowedTypes={ ALLOWED_MEDIA_TYPES }
						value={ imageId }
						render={ ( { open } ) => (
							<Button onClick={ open }>Open Media Library</Button>
						) }
					/>
				</MediaUploadCheck>
				</>
			)
			}
			<RichText
						tagName={textLevel}
						value={text}
						onChange={onChangeText}
						placeholder={"Enter a title"}
						style={style}
					/>
			<InspectorControls>
					<Panel>
						<PanelBody title="Size">
							{textLevels.map(el => <Button onClick={() => {onChangeTextLevel(el)}}>{el}</Button>)}
						</PanelBody>
					</Panel>
					<Panel>
						<PanelBody title="Color">
							<ColorPicker onChange={(newColor) => {onChangeTextColor(newColor)}} />
						</PanelBody>
					</Panel>
				</InspectorControls>
		</div>
	);
}
