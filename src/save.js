import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { imageURL, text, textLevel, textColor } = attributes
	const TagName = textLevel
	return (
		<>
			{imageURL ? (
					<div {...useBlockProps.save()
					} >
						<img
							src={imageURL}
						/>
						<TagName style={`color:${textColor}`}> 
							<RichText.Content value={text} />
						</TagName>

					</div >
				) : "" }
		</>
	);
}
