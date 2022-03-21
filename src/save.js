import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { imageURL, text, textLevel } = attributes
	return (
		<>
			{imageURL ? (
					<div {...useBlockProps.save()
					} >
						<img
							src={imageURL}
						/>
						<RichText.Content value={text} tagName={textLevel} />

					</div >
				) : "" }
		</>
	);
}
