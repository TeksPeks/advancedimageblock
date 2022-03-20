import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { imageURL, text } = attributes
	return (
		<>
			{imageURL ? (
					<div {...useBlockProps.save()
					} >
						<img
							src={imageURL}
							alt={imgAlt}
						/>
						<RichText.Content value={text} />

					</div >
				) : "" }
		</>
	);
}
