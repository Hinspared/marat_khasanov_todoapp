import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import { MenuProps } from '../../../../setup/interfaces';
import { Button, Typography, Menu } from '@mui/material';

export default function BasicMenu({
  onClick,
  onClickCopy,
  onClickDelete,
  onClose,
  open,
  anchorEl,
}: MenuProps) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      <Button
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={onClick}
        className="menu"
      >
        <Typography variant="h4" color="secondary">
          ...
        </Typography>
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={onClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuList className="menu">
          <MenuItem onClick={onClickDelete}>
            <ListItemText>Delete</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem onClick={onClickCopy}>
            <ListItemText>Copy</ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}
