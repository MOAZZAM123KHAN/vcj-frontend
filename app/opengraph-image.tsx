import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'VCJ Jewellers Jaunpur';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#1a0a00',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: '#854F0B',
            width: '100%',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              color: '#EAB308',
              letterSpacing: '-2px',
              fontFamily: 'Georgia, serif',
            }}
          >
            VCJ
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 400,
              color: '#FAC775',
              letterSpacing: '12px',
              fontFamily: 'Georgia, serif',
              marginTop: '8px',
            }}
          >
            JEWELLERS
          </div>
          <div
            style={{
              width: '120px',
              height: '1px',
              background: '#854F0B',
              marginTop: '24px',
              marginBottom: '24px',
            }}
          />
          <div
            style={{
              fontSize: 22,
              color: '#D3D1C7',
              fontWeight: 400,
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            Jaunpur's Trusted Jeweller Since 1960
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '48px',
            fontSize: 16,
            color: '#888780',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          vcjjewellers.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
