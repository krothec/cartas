import { Card, CardContent, CardActions } from '@mui/material';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import ShieldIcon from '@mui/icons-material/Shield';
import FlareIcon from '@mui/icons-material/Flare';
import Typography from '@mui/material/Typography';
import React from 'react';

import { ICard } from '../../interface';

export interface CardOptions {
	card: ICard;
	height?: string;
	width?: string;
	marginTop?: string;
}

const CustomCard: React.FC<CardOptions> = ({
	card,
	height,
	width,
	marginTop,
}: CardOptions) => {
	return (
		<>
			<Card
				className="customCard"
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					flexDirection: 'column',
					border: 'solid 1px black',
					background: `${card.color}`,
					height: '14rem',
					maxWidth: '10rem',
					width: '10rem',
					marginTop: `${marginTop}`,
					boxShadow:
						'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
				}}
			>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{card.class}
					</Typography>
					<Typography gutterBottom variant="h5" component="div">
						{card.type}
					</Typography>
					<Typography gutterBottom variant="body2" component="div">
						{card.description}
					</Typography>
				</CardContent>
				<CardActions>
					<Typography gutterBottom variant="body1" component="div">
						<FlashOnIcon />
						{card.attack}
					</Typography>
					<Typography gutterBottom variant="body1" component="div">
						<ShieldIcon />
						{card.def}
					</Typography>
					<Typography gutterBottom variant="body1" component="div">
						<FlareIcon />
						{card.mana}
					</Typography>
				</CardActions>
			</Card>
		</>
	);
};

export default CustomCard;
