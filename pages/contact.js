import React from "react";
import Image from "next/image";
import Head from "next/head";
import AccordionItem from "@components/molecules/AccordionItem";
import Header from "@components/organisms/Header";
import Footer from "@components/organisms/Footer";
import styles from "@components/FeedbackForm.module.css";
import Button from "@components/atom/Button";

function Contact() {
  return (
    <>
      <Head>
        <title>聯絡我們｜基因洞察</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <section className="h-[calc(100dvh-390px)] overflow-scroll flex flex-row justify-center items-center w-full space-x-[66px] mt-[60px] px-12">
          <div className="w-[530] h-[530px]">
            <Image
              src="/images/contact.png"
              width={530}
              height={530}
              alt="聯絡的圖片"
              className="w-[530px] h-[530px]"
            />
          </div>
          <div className="space-y-4 max-w-[625px]">
            <h5 className="text-h5 font-bold">
              請留下您的資訊，我們將儘速與您聯繫
            </h5>
            <form
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              name="feedback"
              method="POST"
              action="/success"
            >
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <label htmlFor="name" className="text-h6 font-bold">
                    如何稱呼您<span className="text-red">*</span>
                  </label>
                  <input
                    required
                    id="name"
                    type="text"
                    name="name"
                    placeholder="王大明"
                    className="w-full border border-dark-3 rounded py-3 px-6 block"
                  />
                </div>
                <div>
                  <label htmlFor="tel" className="text-h6 font-bold">
                    聯絡電話<span className="text-red">*</span>
                  </label>
                  <input
                    required
                    id="tel"
                    type="tel"
                    name="tel"
                    placeholder="0987654321"
                    className="w-full border border-dark-3 rounded py-3 px-6 block"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-h6 font-bold">
                    電子信箱<span className="text-red">*</span>
                  </label>
                  <input
                    required
                    id="email"
                    type="email"
                    name="email"
                    placeholder="王大明"
                    className="w-full border border-dark-3 rounded py-3 px-6 block"
                  />
                </div>
                <div>
                  <label htmlFor="introducer" className="text-h6 font-bold">
                    介紹人/單位
                  </label>
                  <input
                    id="introducer"
                    type="text"
                    name="introducer"
                    placeholder="李小花"
                    className="w-full border border-dark-3 rounded py-3 px-6 block"
                  />
                </div>
                <div>
                  <label htmlFor="consult" className="text-h6 font-bold">
                    詢問項目<span className="text-red">*</span>
                  </label>
                  <div class="select-wrapper">
                    <select
                      required
                      id="consult"
                      value={""}
                      className="w-full border border-dark-3 rounded py-3 px-6 block"
                    >
                      <option disabled value={""}>
                        請選擇
                      </option>
                      <option value="1">Dimond</option>
                      <option value="2">vertical</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="dateTime" className="text-h6 font-bold">
                    聯絡時間<span className="text-red">*</span>
                  </label>
                  <input
                    required
                    id="dateTime"
                    type="datetime-local"
                    name="dateTime"
                    min="2023-01-01T00:00"
                    className="border border-dark-3 rounded py-3 px-6 block"
                  />
                </div>
              </div>

              <label htmlFor="memo" className="text-h6 font-bold">
                詳細內容及備註
              </label>
              <textarea
                id="memo"
                wrap="soft"
                name="memo"                
                className="w-full border border-dark-3 rounded py-3 px-6 block mb-5"
              ></textarea>
              <Button>提交表單</Button>
            </form>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default Contact;
