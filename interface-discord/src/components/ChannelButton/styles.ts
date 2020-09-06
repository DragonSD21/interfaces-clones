import styled from 'styled-components';
import { HiOutlineHashtag } from 'react-icons/hi';
import { IoMdPersonAdd, IoMdSettings } from 'react-icons/io';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;

    padding: 5px 3px;
    border-radius: 5px;

    background-color: transparent;

    transition: background-color .2s;

    > div {
        display: flex;
        align-items: center;
    }

    > div span {
        margin-left: 5px;
        color: var(--senary);
    }

    > div + div svg {
        display: none;
    }

    &:hover, &.active {
        background-color: var(--quinary);

        > div span {
            color: var(--white);
        }

        > div + div svg {
            display: inline;
        }
    }
`;

export const HashtagIcon = styled(HiOutlineHashtag)`
    height: 20px;
    width: 20px;
    color: var(--symbol);
`;

export const InviteIcon = styled(IoMdPersonAdd)`
    height: 16px;
    width: 16px;
    color: var(--symbol);

    cursor: pointer;

    transition: color .2s;

    &:hover {
        color: var(--white);
    }
`;

export const SettingsIcon = styled(IoMdSettings)`
    height: 16px;
    width: 16px;
    color: var(--symbol);

    margin-left: 4px;

    cursor: pointer;

    transition: color .2s;

    &:hover {
        color: var(--white);
    }
`;

