'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Globe } from 'lucide-react';

type Language = 'ko' | 'en';

export default function TermsPage() {
  const [language, setLanguage] = useState<Language>('ko');

  return (
    <main className='min-h-screen bg-black text-white'>
      {/* Header */}
      <header className='sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10'>
        <div className='container mx-auto px-6 py-4 flex items-center justify-between'>
          <Link
            href='/'
            className='flex items-center gap-2 text-gray-400 hover:text-white transition-colors'
          >
            <ArrowLeft className='w-5 h-5' />
            <span className='font-medium'>홈으로</span>
          </Link>
          <h1 className='text-xl font-bold'>GIGGY</h1>
          <button
            onClick={() => setLanguage(language === 'ko' ? 'en' : 'ko')}
            className='flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-sm'
          >
            <Globe className='w-4 h-4' />
            {language === 'ko' ? 'English' : '한국어'}
          </button>
        </div>
      </header>

      {/* Content */}
      <div className='container mx-auto px-6 py-12 max-w-4xl'>
        {language === 'ko' ? <KoreanTerms /> : <EnglishTerms />}
      </div>

      {/* Footer */}
      <footer className='border-t border-white/10 py-8'>
        <div className='container mx-auto px-6 text-center text-gray-500 text-sm'>
          © 2026 GIGGY. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

function KoreanTerms() {
  return (
    <article className='prose prose-invert prose-lg max-w-none'>
      <h1 className='text-4xl font-bold mb-2'>GIGGY 서비스 이용약관</h1>
      <p className='text-gray-400 mb-8'>
        본 약관은 개인 개발자 김진영(이하 &quot;운영자&quot;)이 제공하는 GIGGY
        서비스의 이용과 관련하여 운영자와 이용자 간의 권리, 의무 및 책임사항을
        규정함을 목적으로 합니다.
      </p>

      <hr className='border-white/10 my-8' />

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>제1조 (목적)</h2>
        <p className='text-gray-300'>
          본 약관은 운영자가 제공하는 GIGGY 서비스(이하 &quot;서비스&quot;)의
          이용 조건 및 절차, 이용자와 운영자 간의 권리·의무 및 책임사항을
          규정함을 목적으로 합니다.
        </p>
      </section>

      <hr className='border-white/10 my-8' />

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>제2조 (운영자 정보)</h2>
        <ul className='list-disc list-inside text-gray-300 space-y-2'>
          <li>
            <strong>운영자명:</strong> 김진영
          </li>
          <li>
            <strong>서비스명:</strong> GIGGY
          </li>
          <li>
            <strong>서비스 형태:</strong> 개인 프로젝트
          </li>
          <li>
            <strong>연락처:</strong>{' '}
            <a
              href='mailto:kooz.giggy@gmail.com'
              className='text-blue-400 hover:underline'
            >
              kooz.giggy@gmail.com
            </a>
          </li>
        </ul>
      </section>

      <hr className='border-white/10 my-8' />

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>제3조 (용어의 정의)</h2>
        <div className='text-gray-300 space-y-3'>
          <p>
            ① &quot;서비스&quot;란 운영자가 제공하는 웹사이트, 모바일
            애플리케이션, 기기(Device) 연동 기능 및 관련 소프트웨어 일체를
            의미합니다.
          </p>
          <p>
            ② &quot;기기&quot;란 서비스 제공을 위해 연동되거나 사용되는 하드웨어
            장치를 의미합니다.
          </p>
          <p>
            ③ &quot;이용자&quot;란 본 약관에 동의하고 서비스를 이용하는 개인을
            의미합니다.
          </p>
          <p>
            ④ &quot;회원&quot;이란 서비스 이용을 위해 계정을 생성한 이용자를
            의미합니다.
          </p>
          <p>
            ⑤ &quot;콘텐츠&quot;란 이용자가 서비스 이용 과정에서 생성하거나
            등록하는 정보, 데이터, 텍스트, 이미지 등을 의미합니다.
          </p>
        </div>
      </section>

      <hr className='border-white/10 my-8' />

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>제4조 (약관의 효력 및 변경)</h2>
        <div className='text-gray-300 space-y-3'>
          <p>
            ① 본 약관은 서비스 화면에 게시하거나 기타 합리적인 방법으로
            공지함으로써 효력이 발생합니다.
          </p>
          <p>
            ② 운영자는 관련 법령을 위반하지 않는 범위 내에서 본 약관을 변경할 수
            있습니다.
          </p>
          <p>③ 약관 변경 시 변경 내용과 적용일자를 사전에 공지합니다.</p>
          <p>
            ④ 이용자가 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단하고
            탈퇴할 수 있습니다.
          </p>
        </div>
      </section>

      <hr className='border-white/10 my-8' />

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>제5조 (서비스의 제공)</h2>
        <div className='text-gray-300 space-y-3'>
          <p>① 운영자는 다음과 같은 서비스를 제공합니다.</p>
          <ol className='list-decimal list-inside ml-4 space-y-1'>
            <li>개인 간 정보 제공 및 연결 기능</li>
            <li>기기 연동 및 데이터 표시 기능</li>
            <li>기타 운영자가 정하는 서비스</li>
          </ol>
          <p>
            ② 서비스는 연중무휴, 1일 24시간 제공함을 원칙으로 하나, 시스템 점검
            등 필요한 경우 일시 중단될 수 있습니다.
          </p>
        </div>
      </section>

      <hr className='border-white/10 my-8' />

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>
          제6조 (회원가입 및 계정 관리)
        </h2>
        <div className='text-gray-300 space-y-3'>
          <p>
            ① 이용자는 서비스에서 정한 절차에 따라 회원가입을 할 수 있습니다.
          </p>
          <p>
            ② 이용자는 본인의 정확한 정보를 제공해야 하며, 허위 정보 제공으로
            인한 불이익은 이용자 본인에게 귀속됩니다.
          </p>
          <p>
            ③ 계정 관리 책임은 이용자 본인에게 있으며, 제3자에게 계정을
            양도하거나 공유할 수 없습니다.
          </p>
        </div>
      </section>

      <hr className='border-white/10 my-8' />

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>제7조 (이용자의 의무)</h2>
        <p className='text-gray-300 mb-3'>
          이용자는 다음 행위를 하여서는 안 됩니다.
        </p>
        <ol className='list-decimal list-inside text-gray-300 space-y-1 ml-4'>
          <li>허위 정보 입력 또는 타인의 정보 도용</li>
          <li>서비스 운영을 방해하는 행위</li>
          <li>법령 또는 공공질서·미풍양속에 반하는 행위</li>
          <li>운영자의 지식재산권을 침해하는 행위</li>
        </ol>
      </section>

      <hr className='border-white/10 my-8' />

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>제8조 (콘텐츠의 권리)</h2>
        <div className='text-gray-300 space-y-3'>
          <p>
            ① 이용자가 서비스에 게시한 콘텐츠의 저작권은 이용자에게 귀속됩니다.
          </p>
          <p>
            ② 운영자는 서비스 운영, 개선, 홍보 목적에 한해 해당 콘텐츠를 무상으로
            사용할 수 있습니다.
          </p>
        </div>
      </section>

      <hr className='border-white/10 my-8' />

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>제9조 (서비스 이용 제한)</h2>
        <div className='text-gray-300 space-y-3'>
          <p>
            ① 운영자는 이용자가 본 약관을 위반할 경우 서비스 이용을 제한할 수
            있습니다.
          </p>
          <p>
            ② 이용 제한에 대한 판단 및 조치는 운영자의 합리적인 기준에 따릅니다.
          </p>
        </div>
      </section>

      <hr className='border-white/10 my-8' />

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>제10조 (책임의 제한)</h2>
        <div className='text-gray-300 space-y-3'>
          <p>
            ① 본 서비스는 개인 프로젝트로 제공되며, 운영자는 서비스의 완전성,
            정확성, 지속성을 보장하지 않습니다.
          </p>
          <p>
            ② 운영자는 서비스 이용 과정에서 발생한 간접적 손해에 대해 책임을 지지
            않습니다.
          </p>
          <p>
            ③ 이용자 간 또는 이용자와 제3자 간 분쟁에 대해 운영자는 개입하거나
            책임을 지지 않습니다.
          </p>
        </div>
      </section>

      <hr className='border-white/10 my-8' />

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>제11조 (서비스 중단 및 종료)</h2>
        <div className='text-gray-300 space-y-3'>
          <p>
            ① 운영자는 운영상 또는 기술상 필요에 따라 서비스의 전부 또는 일부를
            중단하거나 종료할 수 있습니다.
          </p>
          <p>② 서비스 종료 시 사전 공지를 원칙으로 합니다.</p>
        </div>
      </section>

      <hr className='border-white/10 my-8' />

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>제12조 (개인정보 보호)</h2>
        <p className='text-gray-300'>
          운영자는 개인정보 보호 관련 법령을 준수하며, 개인정보 처리에 관한
          사항은 별도의 개인정보처리방침에 따릅니다.
        </p>
      </section>

      <hr className='border-white/10 my-8' />

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>제13조 (준거법 및 관할)</h2>
        <div className='text-gray-300 space-y-3'>
          <p>본 약관은 대한민국 법령을 준거법으로 합니다.</p>
          <p>
            서비스 이용과 관련하여 분쟁이 발생할 경우 관할 법원은 대한민국 법원을
            따릅니다.
          </p>
        </div>
      </section>

      <hr className='border-white/10 my-8' />

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>
          제14조 (위치정보의 수집 및 이용)
        </h2>
        <div className='text-gray-300 space-y-3'>
          <p>
            ① 운영자는 서비스 제공을 위해 이용자의 위치정보를 수집·이용할 수
            있습니다.
          </p>
          <p>② 위치정보는 다음 목적에 한해 사용됩니다.</p>
          <ol className='list-decimal list-inside ml-4 space-y-1'>
            <li>위치 기반 서비스 제공</li>
            <li>서비스 품질 개선 및 오류 분석</li>
          </ol>
          <p>
            ③ 위치정보는 서비스 제공에 필요한 최소한의 범위에서만 수집됩니다.
          </p>
          <p>
            ④ 이용자는 위치정보 수집에 대한 동의를 언제든지 철회할 수 있으며,
            철회 시 일부 서비스 이용이 제한될 수 있습니다.
          </p>
        </div>
      </section>

      <hr className='border-white/10 my-8' />

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>
          제15조 (개인정보의 수집 및 이용)
        </h2>
        <div className='text-gray-300 space-y-3'>
          <p>
            ① 운영자는 서비스 제공을 위해 다음과 같은 개인정보를 수집할 수
            있습니다.
          </p>
          <ol className='list-decimal list-inside ml-4 space-y-1'>
            <li>필수 정보: 이메일, 닉네임, 기기 식별 정보</li>
            <li>선택 정보: 위치정보, 서비스 이용 기록</li>
          </ol>
          <p>② 개인정보는 다음 목적을 위해 이용됩니다.</p>
          <ol className='list-decimal list-inside ml-4 space-y-1'>
            <li>회원 식별 및 서비스 제공</li>
            <li>고객 문의 응대</li>
            <li>서비스 개선 및 통계 분석</li>
          </ol>
          <p>③ 개인정보는 수집 목적 달성 시 지체 없이 파기합니다.</p>
        </div>
      </section>

      <hr className='border-white/10 my-8' />

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>
          제16조 (개인정보의 보관 및 보호)
        </h2>
        <div className='text-gray-300 space-y-3'>
          <p>
            ① 운영자는 개인정보 보호를 위해 합리적인 기술적·관리적 보호조치를
            취합니다.
          </p>
          <p>② 개인정보는 법령에 따라 일정 기간 보관될 수 있습니다.</p>
        </div>
      </section>

      <hr className='border-white/10 my-8' />

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>제17조 (이용자의 권리)</h2>
        <div className='text-gray-300 space-y-3'>
          <p>
            ① 이용자는 언제든지 자신의 개인정보 열람, 수정, 삭제를 요청할 수
            있습니다.
          </p>
          <p>
            ② 개인정보 관련 문의는 제2조의 연락처를 통해 접수할 수 있습니다.
          </p>
        </div>
      </section>

      <hr className='border-white/10 my-8' />

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>부칙</h2>
        <p className='text-gray-300'>
          본 약관은 2026년 2월 10일부터 적용됩니다.
        </p>
      </section>
    </article>
  );
}

function EnglishTerms() {
  return (
    <article className='prose prose-invert prose-lg max-w-none'>
      <h1 className='text-4xl font-bold mb-2'>GIGGY Terms of Service</h1>
      <p className='text-gray-400 mb-8'>
        These Terms of Service (&quot;Terms&quot;) govern the use of the GIGGY
        service (the &quot;Service&quot;) provided by JinYoung Kim (the
        &quot;Operator&quot;), an individual developer. By using the Service,
        you agree to be bound by these Terms.
      </p>

      <hr className='border-white/10 my-8' />

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>Article 1 (Purpose)</h2>
        <p className='text-gray-300'>
          The purpose of these Terms is to define the rights, obligations, and
          responsibilities between the Operator and users in connection with the
          use of the GIGGY service, including any associated websites, mobile
          applications, devices, and software.
        </p>
      </section>

      <hr className='border-white/10 my-8' />

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>
          Article 2 (Operator Information)
        </h2>
        <ul className='list-disc list-inside text-gray-300 space-y-2'>
          <li>
            <strong>Operator:</strong> JinYoung Kim
          </li>
          <li>
            <strong>Service Name:</strong> GIGGY
          </li>
          <li>
            <strong>Service Type:</strong> Personal Project
          </li>
          <li>
            <strong>Contact:</strong>{' '}
            <a
              href='mailto:kooz.giggy@gmail.com'
              className='text-blue-400 hover:underline'
            >
              kooz.giggy@gmail.com
            </a>
          </li>
        </ul>
      </section>

      <hr className='border-white/10 my-8' />

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>Article 3 (Definitions)</h2>
        <ol className='list-decimal list-inside text-gray-300 space-y-2'>
          <li>
            &quot;Service&quot; means all services provided by the Operator,
            including applications, websites, servers, APIs, and device-related
            features.
          </li>
          <li>
            &quot;Device&quot; means any hardware that is connected to or used
            in conjunction with the Service.
          </li>
          <li>
            &quot;User&quot; means any individual who agrees to these Terms and
            uses the Service.
          </li>
          <li>&quot;Member&quot; means a user who has created an account.</li>
          <li>
            &quot;Content&quot; means any data, text, images, logs, or
            information created, uploaded, or generated through the Service.
          </li>
        </ol>
      </section>

      <hr className='border-white/10 my-8' />

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>
          Article 4 (Effect and Modification of Terms)
        </h2>
        <ol className='list-decimal list-inside text-gray-300 space-y-2'>
          <li>
            These Terms become effective upon being posted within the Service.
          </li>
          <li>
            The Operator may modify these Terms to the extent permitted by
            applicable laws.
          </li>
          <li>Changes to the Terms will be announced in advance.</li>
          <li>
            If a user does not agree to the modified Terms, the user may
            discontinue use of the Service.
          </li>
        </ol>
      </section>

      <hr className='border-white/10 my-8' />

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>
          Article 5 (Provision of the Service)
        </h2>
        <div className='text-gray-300 space-y-3'>
          <p>1. The Operator provides the following services:</p>
          <ul className='list-disc list-inside ml-4 space-y-1'>
            <li>Information sharing and connection between individuals</li>
            <li>Device integration and data display features</li>
            <li>Any additional services determined by the Operator</li>
          </ul>
          <p>
            2. The Service is provided on an &quot;as-is&quot; basis and may be
            temporarily suspended for maintenance or technical reasons.
          </p>
        </div>
      </section>

      <hr className='border-white/10 my-8' />

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>
          Article 6 (Account Registration and Management)
        </h2>
        <ol className='list-decimal list-inside text-gray-300 space-y-2'>
          <li>
            Users may register an account according to the procedures set by the
            Service.
          </li>
          <li>Users must provide accurate information.</li>
          <li>
            Users are responsible for managing their account credentials and
            must not share them with third parties.
          </li>
        </ol>
      </section>

      <hr className='border-white/10 my-8' />

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>
          Article 7 (User Obligations)
        </h2>
        <p className='text-gray-300 mb-3'>Users shall not:</p>
        <ol className='list-decimal list-inside text-gray-300 space-y-1 ml-4'>
          <li>Provide false information or impersonate others</li>
          <li>Interfere with the operation of the Service</li>
          <li>Violate applicable laws or public order</li>
          <li>
            Infringe upon the intellectual property rights of the Operator or
            others
          </li>
        </ol>
      </section>

      <hr className='border-white/10 my-8' />

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>Article 8 (Content Rights)</h2>
        <ol className='list-decimal list-inside text-gray-300 space-y-2'>
          <li>Users retain ownership of the Content they create.</li>
          <li>
            The Operator may use such Content free of charge for the purpose of
            operating, improving, and promoting the Service.
          </li>
        </ol>
      </section>

      <hr className='border-white/10 my-8' />

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>
          Article 9 (Service Restrictions)
        </h2>
        <p className='text-gray-300'>
          The Operator may restrict or suspend Service access if a user violates
          these Terms.
        </p>
      </section>

      <hr className='border-white/10 my-8' />

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>
          Article 10 (Limitation of Liability)
        </h2>
        <ol className='list-decimal list-inside text-gray-300 space-y-2'>
          <li>
            The Service is provided as a personal project, and the Operator
            makes no guarantees regarding accuracy, completeness, or
            availability.
          </li>
          <li>
            The Operator shall not be liable for any indirect, incidental, or
            consequential damages.
          </li>
          <li>
            The Operator is not responsible for disputes between users or
            between users and third parties.
          </li>
        </ol>
      </section>

      <hr className='border-white/10 my-8' />

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>
          Article 11 (Suspension and Termination of the Service)
        </h2>
        <p className='text-gray-300'>
          The Operator may suspend or terminate all or part of the Service due
          to operational or technical needs, with prior notice when reasonably
          possible.
        </p>
      </section>

      <hr className='border-white/10 my-8' />

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>
          Article 12 (Personal Data Protection)
        </h2>
        <p className='text-gray-300'>
          The Operator complies with applicable data protection laws. Details
          regarding the collection and use of personal data are governed by the
          Privacy Policy included in these Terms.
        </p>
      </section>

      <hr className='border-white/10 my-8' />

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>
          Article 13 (Location Information)
        </h2>
        <ol className='list-decimal list-inside text-gray-300 space-y-2'>
          <li>
            The Operator may collect and use location information to provide
            location-based services.
          </li>
          <li>
            Location information is used solely for service provision and
            improvement.
          </li>
          <li>
            Users may withdraw consent to location data collection at any time,
            which may limit certain features.
          </li>
        </ol>
      </section>

      <hr className='border-white/10 my-8' />

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>
          Article 14 (Collection and Use of Personal Information)
        </h2>
        <div className='text-gray-300 space-y-3'>
          <p>1. The Operator may collect the following personal information:</p>
          <ul className='list-disc list-inside ml-4 space-y-1'>
            <li>Required: Email address, nickname, device identifiers</li>
            <li>Optional: Location data, service usage records</li>
          </ul>
          <p>2. Personal information is used for:</p>
          <ul className='list-disc list-inside ml-4 space-y-1'>
            <li>User identification and service provision</li>
            <li>Customer support</li>
            <li>Service improvement and analytics</li>
          </ul>
          <p>
            3. Personal information will be deleted without delay once the
            purpose of collection is achieved, unless retention is required by
            law.
          </p>
        </div>
      </section>

      <hr className='border-white/10 my-8' />

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>
          Article 15 (Retention and Protection of Personal Information)
        </h2>
        <ol className='list-decimal list-inside text-gray-300 space-y-2'>
          <li>
            The Operator takes reasonable technical and administrative measures
            to protect personal information.
          </li>
          <li>
            Personal information may be retained for a certain period in
            accordance with applicable laws.
          </li>
        </ol>
      </section>

      <hr className='border-white/10 my-8' />

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>Article 16 (User Rights)</h2>
        <ol className='list-decimal list-inside text-gray-300 space-y-2'>
          <li>
            Users may request access to, correction of, or deletion of their
            personal information at any time.
          </li>
          <li>
            Requests may be submitted using the contact information in Article
            2.
          </li>
        </ol>
      </section>

      <hr className='border-white/10 my-8' />

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>
          Article 17 (Governing Law and Jurisdiction)
        </h2>
        <div className='text-gray-300 space-y-3'>
          <p>
            These Terms shall be governed by the laws of the Republic of Korea.
          </p>
          <p>
            Any disputes arising in connection with the Service shall be subject
            to the jurisdiction of the courts of the Republic of Korea.
          </p>
        </div>
      </section>

      <hr className='border-white/10 my-8' />

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>Addendum</h2>
        <p className='text-gray-300'>
          These Terms shall take effect on February 10, 2026.
        </p>
      </section>
    </article>
  );
}
