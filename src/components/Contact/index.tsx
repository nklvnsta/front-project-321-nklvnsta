import React, { FC, useState, useEffect } from 'react';
import { Card, Skeleton, Avatar, Typography } from 'antd';
import { EnvironmentOutlined, PhoneOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { StyledCard, FeedbackForm } from './style';
import { SubmitHandler, useForm } from "react-hook-form";
import styled from 'styled-components';


const { Meta } = Card;
const { Paragraph } = Typography;

