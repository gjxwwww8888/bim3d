import StraightenIcon from '@mui/icons-material/Straighten';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor';
import VerticalAlignBottomOutlinedIcon from '@mui/icons-material/VerticalAlignBottomOutlined';
import VerticalAlignTopOutlinedIcon from '@mui/icons-material/VerticalAlignTopOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export const topMenuData = [
    { key:0, arialabel: 'import', icon: <VerticalAlignBottomOutlinedIcon />, label: '导入' },
    { key:1, arialabel: 'export', icon: <VerticalAlignTopOutlinedIcon />, label: '导出' },
    { key:2, arialabel: 'dimension', icon: <StraightenIcon />, label: '标尺' },
    { key:3, arialabel: 'undo', icon: <UndoIcon />, label: '撤销' },
    { key:4, arialabel: 'redo', icon: <RedoIcon />, label: '回退' },
    { key:5, arialabel: 'screenshot', icon: <ScreenshotMonitorIcon />, label: '截图' },
    { key:6, arialabel: 'price', icon: <AddShoppingCartIcon />, label: '报价' }
];

export const topMenuRightData = [
    { key:0, arialabel: 'setting', icon: <SettingsOutlinedIcon />, label: '设置' },
    { key:1, arialabel: 'user', icon: <AccountCircleOutlinedIcon />, label: '用户' }
];