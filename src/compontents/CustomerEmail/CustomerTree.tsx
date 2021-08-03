import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem, { TreeItemProps, treeItemClasses } from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import Label from '@material-ui/icons/Label';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import InfoIcon from '@material-ui/icons/Info';
import ForumIcon from '@material-ui/icons/Forum';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import { HOVER_SCROLL_BAR } from '../../consts';

declare module 'react' {
  interface CSSProperties {
    '--tree-view-color'?: string;
    '--tree-view-bg-color'?: string;
  }
}

type StyledTreeItemProps = TreeItemProps & {
  bgColor?: string;
  color?: string;
  labelIcon?: React.ElementType<SvgIconProps>;
  labelInfo?: string;
  labelText: string;
};

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.text.secondary,
  [`& .${treeItemClasses.content}`]: {
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightMedium,
    '&.Mui-expanded': {
      fontWeight: theme.typography.fontWeightRegular,
    },
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
    '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
      color: 'var(--tree-view-color)',
    },
    [`& .${treeItemClasses.label}`]: {
      fontWeight: 'inherit',
      color: 'inherit',
    },
  },
}));

function StyledTreeItem(props: StyledTreeItemProps) {
  const {
    bgColor,
    color,
    labelIcon: LabelIcon,
    labelInfo,
    labelText,
    ...other
  } = props;

  return (
    <StyledTreeItemRoot
      label={
        <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
          <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
          <Typography variant="body2" sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </Box>
      }
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor,
      }}
      {...other}
    />
  );
}

export default function CustomerTree() {
  return (
    <TreeView
      aria-label="gmail"
      defaultExpanded={['3']}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
      sx={{ flex: 1, overflowY: 'auto', ...HOVER_SCROLL_BAR}}
    >
      <StyledTreeItemRoot nodeId="1"
        label={
          <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
            <Box component={AccountCircleIcon} color="inherit" sx={{ mr: 1 }} />
            <Typography variant="body2" sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
              Martin
            </Typography>
            <Typography variant="caption" color="inherit">
              
            </Typography>
          </Box>
        }
      >
        <StyledTreeItem nodeId="11" labelText="法国" labelIcon={FolderOpenIcon}>
          <StyledTreeItem nodeId="111" labelText="重点客户" labelIcon={FolderOpenIcon}>
            <StyledTreeItemRoot nodeId="1111" 
             label={
              <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
                <SvgIcon color="inherit" sx={{ mr: 1 }}>
                  <path fill="currentColor" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z" />
                </SvgIcon>
                <Typography variant="body2" sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
                  Comapny 1
                </Typography>
                <Typography variant="caption" color="inherit">
                  
                </Typography>
              </Box>
            } />
            <StyledTreeItemRoot nodeId="1112" 
             label={
              <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
                <SvgIcon color="inherit" sx={{ mr: 1 }}>
                  <path fill="currentColor" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z" />
                </SvgIcon>
                <Typography variant="body2" sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
                  Comapny 2
                </Typography>
                <Typography variant="caption" color="inherit">
                  
                </Typography>
              </Box>
            } />
            <StyledTreeItemRoot nodeId="1113" 
             label={
              <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
                <SvgIcon color="inherit" sx={{ mr: 1 }}>
                  <path fill="currentColor" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z" />
                </SvgIcon>
                <Typography variant="body2" sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
                  Comapny 3
                </Typography>
                <Typography variant="caption" color="inherit">
                  
                </Typography>
              </Box>
            } />

          </StyledTreeItem>
        </StyledTreeItem>
        <StyledTreeItem nodeId="12" labelText="意大利">
          <StyledTreeItem nodeId="121" labelText="重点客户">
            <StyledTreeItem nodeId="1211" labelText="Company1" labelIcon={DeleteIcon} />
            <StyledTreeItem nodeId="1212" labelText="Company2" labelIcon={DeleteIcon} />
          </StyledTreeItem>
        </StyledTreeItem>
      </StyledTreeItemRoot>
      <StyledTreeItem nodeId="3" labelText="Categories" labelIcon={Label}>
        <StyledTreeItem
          nodeId="5"
          labelText="Social"
          labelIcon={SupervisorAccountIcon}
          labelInfo="90"
          color="#1a73e8"
          bgColor="#e8f0fe"
        />
        <StyledTreeItem
          nodeId="6"
          labelText="Updates"
          labelIcon={InfoIcon}
          labelInfo="2,294"
          color="#e3742f"
          bgColor="#fcefe3"
        />
        <StyledTreeItem
          nodeId="7"
          labelText="Forums"
          labelIcon={ForumIcon}
          labelInfo="3,566"
          color="#a250f5"
          bgColor="#f3e8fd"
        />
        <StyledTreeItem
          nodeId="8"
          labelText="Promotions"
          labelIcon={LocalOfferIcon}
          labelInfo="733"
          color="#3c8039"
          bgColor="#e6f4ea"
        />
      </StyledTreeItem>
      <StyledTreeItem nodeId="4" labelText="History" labelIcon={Label} />
    </TreeView>
  );
}
